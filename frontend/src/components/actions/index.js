import { Btn, Container, Label, WrapperBtn } from "./styles";

export default function ActionsBar({ refresh, sendFiles}){
    return(
        <Container>
            <WrapperBtn>
                <Btn type="button" value="Refresh" onClick={()=>refresh()}/>
            </WrapperBtn>
            <WrapperBtn>
                <Label htmlFor="send" onClick={()=>sendFiles()}>
                    Send
                </Label>
                <Btn id="send" type="file"/>
            </WrapperBtn>
        </Container>
    );
}