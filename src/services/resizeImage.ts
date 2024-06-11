const imageUrl =
  "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg";
// const resizeImage = (url: string) => {
//   const parts = url.split("/");
//   const index = parts.findIndex((part) => part === "media");
//   if (index !== -1) {
//     parts.splice(index + 1, 0, `crop/600/400`);
//     return parts.join("/");
//   }
//   return url;

//   // Add crop segment for dimensions 600x400
// };

// export default resizeImage;

const getCroppedImageUrl = (url: string) => {
  if (!url) return "";

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
