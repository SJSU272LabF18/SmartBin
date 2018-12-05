import oneDustBinIcon from './../images/property1.jpg';
import twoDustBinIcon from './../images/property2.jpg';
import threeDustBinIcon from './../images/property3.jpg';
import fourDustBinIcon from './../images/property4.jpeg';
import fiveDustBinIcon from './../images/property5.jpg';
import defaultDustBinIcon from './../images/defaulthotel.jpg';


export const getImages = () => {
  return {
    "1":oneDustBinIcon,
    "2":twoDustBinIcon,
    "3":threeDustBinIcon,
    "4":fourDustBinIcon,
    "5":fiveDustBinIcon,
    "default_hotel":defaultDustBinIcon,
  }
};


export const retrievePropertyImages = (name)=>{
  var images = getImages();
  return images[name]?images[name]:images["default_hotel"];
}
