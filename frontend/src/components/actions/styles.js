import styled from "styled-components";

export const Container = styled.section`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:1rem;
`;

export const Btn = styled.input`
    &#send{
        display:none;
    }
    border:none;
    background: #1E5471;
    color:#fff;
    font-size:1.3rem;
    border-radius:.3rem;
    padding:0.2rem .5rem;
`;

export const Label = styled.label`
    background: #1E5471;
    color:#fff;
    font-size:1.3rem;
    border-radius:.3rem;
    padding:0.2rem .5rem;
`;

export const WrapperBtn = styled.div``;