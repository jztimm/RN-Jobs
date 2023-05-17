import { Stack, useRouter, useSearchParams } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Image,
  StyleSheet,
} from "react-native";

import { ScreenHeaderBtn } from "../../components";
import { COLORS, icons, images, SIZES } from "../../constants";

const Profile = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState("Jzavier");
  const [lastName, setLastName] = useState("Timm");

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <View style={styles.container}>
        <Image
          source={{
            uri: "https://www.bootdey.com/image/900x400/3f3ffc/000000",
          }}
          style={styles.coverImage}
        />
        <View style={styles.avatarContainer}>
          <Image source={images.profile} style={styles.avatar} />
          <Text style={[styles.name, styles.textWithShadow]}>
            {firstName} {lastName}
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>jane.doe@example.com</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Location:</Text>
            <Text style={styles.infoValue}>San Francisco, CA</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Bio:</Text>
            <Text style={styles.infoValue}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  coverImage: {
    height: 200,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
  },
  content: {
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  infoValue: {
    marginTop: 5,
  },
});

export default Profile;
