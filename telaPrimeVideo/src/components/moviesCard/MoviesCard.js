import { TouchableOpacity, View, StyleSheet, Image } from "react-native"


export const MoviesCard = (props) => {
  return (
    <TouchableOpacity>
        <Image style={styles.img} source={props.moviesUrl}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    img:{
        marginRight:20,
    },
});