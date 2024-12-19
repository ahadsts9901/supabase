import "./index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../config/supabase";

const Storage = () => {
    const navigate = useNavigate();
    const [file, set_file] = useState<any>(null);
    const [loading, set_loading] = useState(false);

    const uploadFile = async () => {
        if (!file) return
        set_loading(true);
        const fileName = `${Date.now()}-${file.name}`;
        const { data, error } = await supabase
            .storage
            .from('images')
            .upload(fileName, file);

        set_loading(false)
        console.log(data)
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
                    type="file"
                    onChange={(e: any) => set_file(e?.target?.files[0])}
                />
                <br />
                <button onClick={uploadFile} disabled={loading}>
                    {loading ? "Uploading..." : "Upload file"}
                </button>
            </div>
        </div>
    );
};

export default Storage;
