// export const dataFetcher = async (userInfo, setUserInfo, setMessage) => {
//     try {
//         const GetIpAddress = await fetch("https://api6.ipify.org/?format=json")
//         const ipAddress = await GetIpAddress.json()
//         const GetIpDetails = await fetch(`https://ipapi.co/${ipAddress.ip}/json`)
//         const ipDetails = await GetIpDetails.json()
//         const { city, region, country_name, longitude, latitude } = ipDetails
//         setUserInfo( {...userInfo,
//             ip: ipAddress.ip,
//             city,
//             state: region,
//             country: country_name,
//             longitude,
//             latitude
//         } )
//     } catch (error) {
//         setMessage('Network error! Try again later.')
//     }
     
// }

export const getLocation = ( location, setLocation) =>{
    const setPosition = (position) => {
        const { latitude, longitude } = position.coords;
        setLocation( {...location, latitude, longitude } )
    };
    const error = (error) => {
        console.log(error)
    };
    const options = {
        enableHighAccuracy: true
    };
    if (window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition(setPosition, error, options);
    } else {
        alert("Geolocation is not supported by this browser.")
    }
}