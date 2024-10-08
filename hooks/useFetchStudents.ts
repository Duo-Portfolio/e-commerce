// import { useState, useEffect } from 'react';
// import axios from 'axios';

// // Define the Student type
// type Student = {
//   id: number;
//   full_name: string;
//   department: string;
// };

// const useFetchStudents = (url: string) => {
//   const [students, setStudents] = useState<Student[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(url, {
//           params: {
//             email: 'instructor1@example.com',
//             password: 'hashed_password1', // Replace with the real hashed password
//           },
//         });
//         setStudents(response.data);
//         setLoading(false);
//       } catch (error: any) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { students, loading, error };
// };

// export default useFetchStudents;
