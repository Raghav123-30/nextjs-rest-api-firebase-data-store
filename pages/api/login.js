import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase-config";
export default async function handler(req,res)  {
    
   
        console.log("Hi from API")
        const{email,password} = JSON.parse(req.body);
        console.log(email,password);
        signInWithEmailAndPassword(auth,email,password).then(() => {
            res.status(200).json({message:'success',data:true})
        }).catch((error) => {
            var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      console.error('Wrong password.');
    } else if (errorCode === 'auth/user-not-found') {
      console.error('User not found.');
    } else if (errorCode === 'auth/invalid-email') {
      console.error('Invalid email address.');
    }
        });
        
      
        
    

        
    //   } catch ((error) => {

    //   }) {
    //     switch (error.code) {
    //       case "auth/weak-password":
    //         console.error("The password is too weak.");
    //         break;
    //       case "auth/email-already-in-use":
    //         console.error("The email is already in use.");
    //         break;
    //       default:
    //         //console.error(error);
    //     }
    //     console.log(error);
    //     res.status(500).json({message:'failed'})
    //   }
    
}
