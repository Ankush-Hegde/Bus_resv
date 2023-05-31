// import styled from 'styled-components';
import styles from '../../styles/Home.module.css'
// import Form from "../components/Form";
import dynamic from 'next/dynamic';

const BGImage=dynamic(()=>import("../../comps/BGImage"),{

ssr:false,
});
const wrapper= styles.div


export default function Home(){
    return(
        <wrapper>
            {/* <form/> */}
            <BGImage></BGImage>
        </wrapper>
    );
}