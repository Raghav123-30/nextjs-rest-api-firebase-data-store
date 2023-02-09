import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase-config";
export default async function handler(req,res)  {
    
   
        console.log("Hi from API")
        const{email,password} = JSON.parse(req.body);
        console.log(email,password);
        createUserWithEmailAndPassword(auth,email,password).then(() => {
            res.status(200).json({message:'success',data:true})
        }).catch((error) => {
            var errorCode = error.code;
            if(errorCode == 'auth/weak-password'){
                res.status(200).json({message:'password is too weak',data:false})
            }
            else if(errorCode == 'auth/email-already-in-use'){
                res.status(200).json({message:'email is already in use',data:false})
            }
            else{
                res.status(200).json({message:'Cannot register',data:false})
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
