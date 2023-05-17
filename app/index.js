import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

import Login from "../app/login/login";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [firstName, setFirstName] = useState("");

  return (
    <>
      <Stack.Screen
        initialRouteName="Login" ///the name of the initial screen
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Screen>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisable: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn
                iconUrl={images.profile}
                dimension="100%"
                handlePress={() => {
                  router.push("/profile/profile");
                }}
              />
            ),
            headerTitle: "",
          }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              padding: SIZES.medium,
            }}
          >
            <Welcome
              firstName={firstName}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleClick={() => {
                if (searchTerm) {
                  router.push(`/search/${searchTerm}`);
                }
              }}
            />
            <Popularjobs />
            <Nearbyjobs />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
