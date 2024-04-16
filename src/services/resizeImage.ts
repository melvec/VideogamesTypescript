
const imageUrl = 'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg';
const resizeImage = (url: string) =>{

   

 
   
      const parts = url.split('/');
      const index = parts.findIndex(part => part === 'media');
      if (index !== -1) {
        parts.splice(index + 1, 0, `crop/600/400`);
        return parts.join('/');
      }
      return url;
 
    
    // Add crop segment for dimensions 600x400
    

}

const croppedImageUrl = resizeImage(imageUrl);
    console.log(croppedImageUrl);

export default resizeImage;