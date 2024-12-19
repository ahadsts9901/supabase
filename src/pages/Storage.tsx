import "./index.css";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { supabase } from "../config/supabase";

const Storage = () => {
    const navigate = useNavigate();

    const fileRef: any = useRef()
    const [file, set_file] = useState<any>(null);
    const [loading, set_loading] = useState(false);
    const [fileurl, set_fileurl] = useState("")

    const uploadFile = async () => {
        if (!file) return
        set_loading(true);
        const fileName = `${Date.now()}-${file.name}`;
        const { error } = await supabase
            .storage
            .from('images')
            .upload(fileName, file);

        // get the file url
        const resp: any = supabase
            .storage
            .from('images')
            .getPublicUrl(fileName);

        if (resp?.data?.publicUrl) set_fileurl(resp?.data?.publicUrl)
        set_loading(false)
        set_file(null)
        if (fileRef.current) fileRef.current.value = ''

        if (error) {
            alert(error.message);
        } else {
            alert("file uploaded successfully");
        }
    };

    return (
        <div className="files-cont">
            <div className="input-cont">
                <p onClick={() => navigate("/")}>{`< Back to home`}</p>
                <input
                    type="file" accept="image/*" ref={fileRef}
                    onChange={(e: any) => set_file(e?.target?.files[0])}
                />
                <br />
                <button onClick={uploadFile} disabled={loading}>
                    {loading ? "Uploading..." : "Upload file"}
                </button>
            </div>
            {
                fileurl ?
                    <div>
                        <img src={fileurl} alt="image" />
                        <a href={fileurl} target="_blank">{fileurl}</a>
                    </div>
                    : null
            }
        </div>
    );
};

export default Storage;
