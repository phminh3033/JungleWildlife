import React,{useEffect,useState} from 'react';
import fireDb from '../firebase';
import { useHistory,useParams} from 'react-router-dom';
import './view.css';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import logo1 from './../img/logo1.png';
import {Link as Link1} from 'react-scroll';
import {Link as Link2} from 'react-router-dom';
import Nav from "./Nav";
import Slider from 'react-slick';
import { tab } from '@testing-library/user-event/dist/tab';
const Container = styled.div`
    height: 80px;
    background-color:#2C6C70;
   `
const Wrapper = styled.div`

 display:flex;
 
`

const Home =styled.div`
font-family: sans-serif;
font-size:13px;
color:white;
 letter-spacing:0.15em;
 padding: 30px 30px 20px 30px;
 font-weight: bold;
`
const About = styled.div`
font-weight: bold;
font-family: sans-serif;
font-size:13px;
color:white;
 letter-spacing:0.15em;
 padding: 30px 30px 20px 30px;
`
const List = styled.div`
font-weight: bold;
font-family: sans-serif;
font-size:13px;
color:white;
 letter-spacing:0.15em;
 padding: 30px 30px 20px 30px;
`
const Logo = styled.div`
width:400px;
color:white;
`
const Search = styled.div`
border: 0.5px solid white;;
display:flex;
width: 250px;
height:25px;
color:white;
margin-top: 25px;
margin-left:60px;


`

const View = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    
    
  };
  const [an,setAn] = useState({});
  const {id} = useParams();

  useEffect(() => {
    fireDb.child(`junglewildlifemagazine/${id}`).get().then((snapshot) => {
      
      if(snapshot.exists()){
        setAn({...snapshot.val()});
      }else{
        setAn({});
      }
    });
  },[id]);

  console.log("an",an);
  return (
    <div className='header'>
     
      <Nav />
    <div>
    <div className='name'>
       <span className="title">{an.tenDiaphuong}</span>
       </div>
    <div className='wrapper1'>
      
       
       <div className='image'>
       
       <Slider {...settings}>
          <div className='slideshow1'>
            <h3 className='imgslide'><img src={an.img1}></img></h3>
          </div>
          <div>
          <h3 className='imgslide'>  <img src={an.img2}></img></h3>
          </div>
          <div>
          <h3 className='imgslide'>  <img src={an.img3}></img></h3>
          </div>
          <div>
          <h3 className='imgslide'>  <img src={an.img4}></img></h3>
          </div>
          <div>
          <h3 className='imgslide'>  <img src={an.img5}></img></h3>
          </div>
          </Slider>
       </div>
       <div className='chitiet'>
            <table className='table'>
              <tr>
                <th>T??n khoa h???c</th>
                <td>{an.tenKhoahoc}</td>
                
              </tr>
              <tr>
              <th>T??n ti???ng Vi???t</th>
                <td>{an.tenTiengViet}</td>
                
              </tr>
              <tr>
              <th>Gi???i</th>
                <td>{an.gioi}</td>
                
              </tr>
              <tr>
              <th>Ng??nh</th>
                <td>{an.nganh}</td>
               </tr>
               <tr>
               <th>L???p</th>
                <td>{an.lop}</td>
                
               </tr>
               <tr>
               <th>B???</th>
                <td>{an.bo}</td>
                
               </tr>
               <tr>
               <th>H???</th>
                <td>{an.ho}</td>
                
               </tr>
              
                 
            </table>
       </div>
       <div className='hinhthai'>
       <p>M?? t??? ?????c ??i???m h??nh th??i</p>
       </div>
       <div className='chitietht'>
      <p>{an.dacDiemhinhthai}</p>
       </div>
       <div className='hinhthai'>
       <p>M?? t??? ?????c ??i???m sinh th??i</p>
       </div>
       <div className='chitietht'>
      <p>{an.dacDiemsinhthai}</p>
       </div>

       <div className='hinhthai'>
       <p>Gi?? tr??? s??? d???ng</p>
       </div>
       
       <div className='chitietht'>
      <p>{an.giaTrisudung}</p>
       </div>

       <div className='hinhthai'>
       <p>T??nh tr???ng b???o t???n</p>

       </div>
       <div className='ttbaoton'>
         <table className='table baoton'>
            <tr>
              <th>Theo IUCN</th>
              <th>Theo s??ch ????? Vi???t Nam</th>
              <th>Theo Ngh??? ?????nh 32</th>
              <th>Theo CITES</th>
            </tr>
            <tr>
              <td>{an.tinhTrangbaotontheoIUCN}</td>
              <td>{an.tinhTrangbaotontheosachdoVN}</td>
              <td>{an.tinhTrangbaotontheonghidinh32}</td>
              <td>{an.tinhTrangbaotontheoCITES}</td>
            </tr>
         </table>
       </div>

       <div className='hinhthai'>
       <p>Ph??n b???</p>
       </div>
       <div className='chitietht'>
      <p>{an.phanBo}</p>
       </div>

       <div className='hinhthai'>
       <p>T??nh tr???ng m???u v???t</p>
       </div>
       <div className='chitietht'>
      <p>{an.tinhTrangmauvat}</p>
       </div>

       <div className='hinhthai'>
       <p>Sinh c???nh</p>
       </div>
       <div className='chitietht'>
      <p>{an.sinhCanh}</p>
       </div>

       <div className='hinhthai'>
       <p>?????a ??i???m</p>
       </div>
       <div className='chitietht'>
      <p>{an.diaDiem}</p>
       </div>

       <div className='hinhthai'>
       <p>Ng??y thu m???u</p>
       </div>
       <div className='chitietht'>
      <p>{an.ngayThumau}</p>
       </div>

       <div className='hinhthai'>
       <p>Ng?????i thu m???u</p>
       </div>
       <div className='chitietht'>
      <p>{an.nguoiThumau}</p>
       </div>

    </div>
    </div>
    </div>



  );
};

export default View;
