import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Form = () => {

    const submit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
            axios({
                method: "post",
                url: `${process.env.REACT_APP_SERVER_URL}/getContent`,
                data: data,
                headers: { "Content-Type": "multipart/form-data" },
              })
              .then((response) => {
                
                console.log(response.data["state"]);
                if(response.data["state"]){

                    console.log(response.data);
                    
                }
                else{
                    // setError(response.data["smg"]);
                }
                
              }).catch((error) => {
                if (error.response) {
                    alert(error);
                    console.log("error~~~~~~~~~")
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                  }
              })
    }

    return (
        <form onSubmit={submit}>
            <div id="form-idea">
                <input type="text" id="idea" name="idea" placeholder="Describe your startup idea in a sentence..." autoFocus autoComplete="false" required></input>
            </div>

            <div id="button-generate">
                <input tabIndex={3} id="generate" name="generate" type="submit" value={"Generate with AI   ✨"} ></input>
            </div>

            <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" value="03AKH6MRESD27BSTaIQOWTdWeIblj8nPmfOEH57KlrxcDfuCL7yTIXXpK9wQfRR_AX_NxgpYjKGO-YpfTmdqy3a-XJTt8c2bXUqhW9r2sACd_dWiiHPDF3drkj-ZiZOp6qZEmdr5W34JuKKmN1F9WntTaSyiEECMA6nBGSPu14Ds-CWb6IH17EprgVSrasHMiWfffjwwyBwkZFQ_m5dXj6Jb3adHuT8tvRJrI9rGYtNEHIhwt_zHQ4vJUxgRzisPnS3zLEaiiSkWPTIflasOtG2dpsi0rZt5o8HjEuG4FvSZS8Y6UnNSEJEjO472-uh_gqPiTdoWb5lBuqY4NtL0XJNBg6kXXv83RCXT5mJNoWiFbzE6tOrSnifv2jvEkiUWigjC6Vld0GKdnCN-UHs1kNqqw203Y1nqavX8Hwxm3K49nqXSO1Kw_exEjf8H_2cvQfa1flpgFflk4WFpjx7-cotKpk26ICgQisqDaudN55Krxic2sejqFckwMF3-7vFp7CGU1xFdfTiM7hPi_RFLEFzemEqnE1FfISTQ"></input>
        </form>
    )
}

export default Form;