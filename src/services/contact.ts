import { addDoc, getDocs, collection , serverTimestamp} from 'firebase/firestore';
import { db } from '../config';

const colRef = collection(db, 'contacts');

export const getAllContacts = async () => {
  const doc_ref = await getDocs(colRef);

  const res: any = [];

  doc_ref.forEach((contact) => {
    res.push({
      id: contact.id,
      ...contact.data(),
    });
  });

  return res;
};

export const addContact = async (values: any) => {
  addDoc(colRef, {
    name: values.name,
    email: values.email,
    phone: values.phone,
    address: values.address,
    city: values.city,
    // createdAt: serverTimestamp()
  });
};
