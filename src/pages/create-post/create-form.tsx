import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { auth } from "../../config/firebase"; 
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'; 


interface CreateFormData {
  title: string;
  description: string;
}

export default function CreateForm() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate(); 

  const schema = yup.object().shape({
    title: yup.string().required('Post title required'),
    description: yup.string().required('Post description required')
  })

  const {
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postRefs = collection(db, 'posts');

  const onCreatePost = async (data: any) => {
    await addDoc(postRefs, {
      // title: data.title,
      // description: data.description,
      // ABOVE LINES SIMPLIFIED AS...
      ...data, 
      user: user?.displayName,
      userId: user?.uid,
    })

    navigate('/');
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onCreatePost)}>
        <input placeholder='Title...' {...register('title')} />
        <p style={{color: 'red'}}>{errors.title?.message}</p>
        <textarea placeholder='Description...' {...register('description')} />
        <p style={{color: 'red'}}>{errors.description?.message}</p>
        <input type="submit" className='submitForm'/>
      </form>
    </div>
  )
}
