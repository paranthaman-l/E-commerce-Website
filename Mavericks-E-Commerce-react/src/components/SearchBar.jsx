// import React, {useState} from 'react'
// import '../Css/SearchBar.css'
// import { BiSearchAlt2 } from "react-icons/bi"
// import { AiOutlineClose } from "react-icons/ai"
// function SearchBar({placeholder,data}) {
//   const [filteredData,setFilteredData]= useState([]);
//   const [wordEntered,setWordEntered]= useState("");
//   const handleFilter = (event) => {
//     const searchword=event.target.value;
//     setWordEntered(searchword);
//     const newfilter = data.filter((value) => {
//       return value.first_name.toLowerCase().includes(searchword.toLowerCase());
//     });
//     if(searchword===""){
//       setFilteredData([]);
//     }else{
//       setFilteredData(newfilter);
//     }
//   }
//       const clearInput = () => {
//         setFilteredData([]);
//         setWordEntered("")
//       }
//   return (
//     <div className="search">
//         <div className="searchinputs">
//             <input type="text"
//             placeholder={placeholder}
//             value={wordEntered}
//              onChange={handleFilter}/>
//         <div className="searchicon">
//         {filteredData.length === 0 ? (
//         <BiSearchAlt2 />
//         ): (<AiOutlineClose onClick={clearInput}/>
//         )}
//         </div>
//           </div>
//         { filteredData.length !==0 && (
//           <div className="dataresult">
//             {filteredData.slice(0,15).map((value,key) => {
//                 return (
//                 <div className='dataitem'>
//                 <p>{value.first_name} </p>
//                 </div>
//                 );
//             })}
//         </div>
// )}
//     </div>
//   );
// }

// export default SearchBar
