import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set, remove, get } from "firebase/database";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import EventBus from "./EventBusEvent";

export class FirebaseController {

    db: any = null
    onetime = false
    auth: any = null

    constructor() {
        this.init()
    }

    init(){
        this.onetime = false
        const firebaseConfig = {
            apiKey: import.meta.env.VITE_FIREBASE_KEY,
            authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
            databaseURL: import.meta.env.VITE_FIREBASE_DATABASE,
            projectId: import.meta.env.VITE_FIREBASE_PROJECT,
            storageBucket: import.meta.env.VITE_FIREBASE_STORAGE,
            messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
            appId: import.meta.env.VITE_FIREBASE_APP_ID,
            measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID

        };
        const fireApp = initializeApp(firebaseConfig);

        this.auth = getAuth(fireApp);

        signInAnonymously(this.auth)
            .then(() => {
            })
            .catch((error) => {
                console.error("Fehler bei der anonymen Anmeldung:", error);
            });

        this.db = getDatabase()
    }

    async getUsers() {
        const allUsers = ref(this.db, "users")
        let data = null

        try {
            const snapshot = await get(allUsers);
            data = snapshot.val();
        } catch (error) {
            console.error("Fehler beim Abrufen von Daten:", error);
        }

        return data
    }

    async getUser(email: string) {
        const allUsers = ref(this.db, "users/" + email)
        let data = null

        try {
            const snapshot = await get(allUsers);
            data = snapshot.val();
        } catch (error) {
            console.error("Fehler beim Abrufen von Daten:", error);
        }

        return data
    }

    createUser(email: string, username: string, blocked: string) {
        const reference = ref(this.db, "users/" + email)
        set(reference, {
            username: username,
            blocked: blocked,
        })
    }

    postContent(time: string, username: string, headline: string, content: string, status: string, dir: string, upvote: string[], downvote: string[]) {
        const reference = ref(this.db, dir + time)
        set(reference, {
            username: username,
            headline: headline,
            content: content,
            upvote: upvote,
            downvote: downvote,
            status: status
        })
    }


    setUserVoted(id: string, username: string, isUpvote: boolean) {
        const reference = ref(this.db, "votes/" + id)
        set(reference, {
            username: username,
            isUpvote: isUpvote
        })
    }

    async getUserVoted(id: string, username: string, dir: string, isUpvote: boolean) {
        const votes = ref(this.db, dir + id);
        let data = null
        try {
            const snapshot = await get(votes);
            data = isUpvote ? snapshot.val().upvote : snapshot.val().downvote
        } catch (error) {
            console.error("Fehler beim Abrufen von Daten:", error);
        }

        return data;
    }


    async getContent(dir: string):Promise<any>{
        const allUsers = ref(this.db, dir);
        let data = null
        try {
            const snapshot = await get(allUsers);
            data = snapshot.val();
        } catch (error) {
            if(!this.onetime){
                this.onetime = true;
                await signInAnonymously(this.auth)
                data = await this.getContent(dir)
            }else{
            }

        }

        return data;
    }

    deletePost(id: string, dir: string) {
        //dir = feedback/
        remove(ref(this.db, dir + id))
    }
}