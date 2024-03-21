import { Link, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { Image, Text, TouchableOpacity, View } from "react-native";

import Colors from "@/constants/Colors";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Chats",
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: "regular",
          headerSearchBarOptions: {
            placeholder: "Search",
          },
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerLeft: () => (
            <TouchableOpacity style={{ paddingRight: 20 }}>
              <Ionicons
                name="ellipsis-horizontal-circle-outline"
                color={Colors.primary}
                size={30}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 30 }}>
              <TouchableOpacity>
                <Ionicons
                  name="camera-outline"
                  color={Colors.primary}
                  size={30}
                />
              </TouchableOpacity>

              <Link
                href={"/(modals)/new-chat"}
                asChild
                style={{ paddingRight: 10 }}
              >
                <Ionicons name="add-circle" color={Colors.primary} size={30} />
              </Link>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                paddingBottom: 4,
                alignItems: "center",
                width: 220,
              }}
            >
              <Image
                source={{
                  uri: "https://avatars.githubusercontent.com/u/39170353?v=4",
                }}
                style={{ width: 40, height: 40, borderRadius: 50 }}
              />

              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Braian Carabajal
              </Text>
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 30 }}>
              <TouchableOpacity>
                <Ionicons
                  name="videocam-outline"
                  color={Colors.primary}
                  size={30}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="call-outline"
                  color={Colors.primary}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
    </Stack>
  );
};
export default Layout;
