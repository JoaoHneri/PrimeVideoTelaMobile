import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

import primeVideoLogo from "../../assets/prime_video.png";

import AmazonLogo from "../../assets/amazon_logo.png";

import SerieTheWheel from "../../assets/movies/the_wheel_of_time.png";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MoviesCard } from "../../components/moviesCard/MoviesCard";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.primeLogoImg} source={primeVideoLogo} />
        <Image style={styles.amazonLogoImg} source={AmazonLogo} />

        <View style={styles.category}>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryText}>TV Shows</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Kids</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrowview} showsVerticalScrollIndicator={false}>

      <TouchableOpacity style={styles.movieImageThumbnail}>
        <Image source={SerieTheWheel} style={styles.movieImage} />
      </TouchableOpacity>

      <Text style={styles.movieText}>Continue Watching</Text>

      <FlatList
        data={MOVIESWATCHING}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MoviesCard moviesUrl={item.moviesURL} />}
        horizontal
        contentContainerStyle={styles.contentList}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.movieText}>Filmes de Crime</Text>

      <FlatList
        data={MOVIESCRIME}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MoviesCard moviesUrl={item.moviesURL} />}
        horizontal
        contentContainerStyle={styles.contentList}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.movieText}>Assista na sua linguagem</Text>

      <FlatList
        data={MOVIESWATCH}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MoviesCard moviesUrl={item.moviesURL} />}
        horizontal
        contentContainerStyle={styles.contentList}
        showsHorizontalScrollIndicator={false}
      />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232F3E",
    alignItems: "flex-start",
  },
  header: {
    width: "100%",
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  amazonLogoImg: {
    marginTop: -32,
    marginLeft: 30,
  },
  primeLogoImg: {},
  scrowview:{
    width: "100%",
  },
  category: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 15,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },
  movieText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    padding: 15,
  },
  movieImageThumbnail: {
    width: "100%",
    alignItems: "center",
  },
  contentList: {
    paddingLeft: 10,
    paddingRight: 30,
  },
});
