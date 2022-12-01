import { BsUpload } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios"
import { useForm } from "react-hook-form";

const Main = () => {
    const [file, setFile] = useState(null);
    const handleChange = file => { setFile(file); };
    const fileTypes = ["JPG", "PNG", "GIF","MP3"];
    const { register, handleSubmit } = useForm();

    // const handleSubmit1 = async () => {
    //     if(file){
    //         console.log(file)
    //         // axios.post('http://localhost:3000/api/test',{file})
    //         // .then((response) => {
    //         //     console.log(response)
    //         // })
    //         const formData = new FormData();
    //         formData.append("file", file);
    //         await fetch("http://localhost:3000/api/test",{
    //             method: 'POST',
    //             // headers: { 'Content-Type': 'multipart/form-data' },
    //             body: formData
    //         }).then((res) => console.log("success"));
            
            
            
    //     }else{
    //         alert("Please choose a file first")
    //     }
    // }

    const [genre,setGenre] = useState("none");

    useEffect(() => {  },[genre]);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("audioFile", data.file[0]);
        console.log(formData)

        const res = await fetch("http://localhost:5000/api/predict", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        setGenre(res.genre)
        
    };


  return (
    <div className="h-[90vh] bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col items-center">
        <div className="text-6xl font-semibold mt-20 bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text p-2">
            Classifying Music Just Got Easier!
        </div>
        <div className="text-2xl font-medium mt-5 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-transparent bg-clip-text p-2">
            Just drop your music file here and we will tell you the genre!
        </div>
        <div className="w-[100vw] p-2 mt-5 flex flex-col items-center justify-between space-y-4">
            {/* <BsUpload /> */}
            <div>
                {/* <FileUploader
                    multiple={true}
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                  /> */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between items-center space-y-5">
                    <input className="input shadow-md  border-pink-500 px-4 py-2 rounded-2xl border-2 text-lg text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 text-transparent bg-clip-text" type="file" {...register("file")} />
                    <button className="ml-2 border rounded-2xl tracking-wider px-4 py-2 bg-pink-600 text-white shadow-xl active:shadow-md transtion hover:bg-pink-500">Analyze</button>
                    <input type="submit" className="hidden"/>
                </form>
            </div>
            {/* <p className="text-xl text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 text-transparent bg-clip-text">{file ? `${file[0].name}` : "No files uploaded yet"}</p> */}
            {/* <button onClick={handleSubmit1} className="border rounded-2xl tracking-wider px-4 py-2 bg-pink-600 text-white shadow-xl active:shadow-md transtion hover:bg-pink-500">
                Analyze
            </button> */}
        </div>
        <div className="text-4xl font-semibold mt-5 bg-gradient-to-r from-green-500 to-green-700 text-transparent bg-clip-text">
            <div>The Genre of your music is:</div>
            <div className="mt-2 text-center text-lime-600">{genre}</div>
        </div>

    </div>
  )
}

export default Main