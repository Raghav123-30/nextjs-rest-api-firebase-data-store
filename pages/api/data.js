import { ElevatorSharp, TrySharp } from "@mui/icons-material";
import { app, database } from "../../firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";

export default function handler(req, res) {
  const feedbackCollectionRef = collection(database, "feedback");
  if (req.method == "POST") {
    console.log("Hi from API");
    const data = JSON.parse(req.body);
    try {
      addDoc(feedbackCollectionRef, {
        email: data.email,
        text: data.text,
      });
      res.status(200).json({
        message: "SUCCESS",
      });
    } catch (err) {
      res.status(500).json({
        message: "failed",
      });
    }
  } else if (req.method == "GET") {
    let documents = [];
    try {
      getDocs(feedbackCollectionRef)
        .then((data) => {
          data.docs.forEach((doc) => {
            let document = {
              email: doc.data().email,
              text: doc.data().text,
            };
            documents.push(document);
          });
        })
        .then(() => {
          res.status(200).json({
            message: "SUCCESS",
            data: documents,
          });
        });
    } catch (err) {
      res.status(500).json({
        message: "failed",
      });
    }
  }

  // db.collection('feedback')
  //   .get()
  //   .then(snapshot => {
  //     let data = [];
  //     snapshot.forEach(doc => {
  //       let document = {
  //         email: doc.data().email,
  //         text: doc.data().text
  //       };
  //       data.push(document);
  //     });
  //     return res.status(200).json(data);
  //   })
  //   .catch(error => {
  //     return res.status(500).json({ message: 'Error fetching data: ' + error });
  //   });
}
