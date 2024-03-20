import { Link, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { TouchableOpacity, View } from "react-native";

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

              <Link href={"/"} asChild style={{ paddingRight: 10 }}>
                <Ionicons name="add-circle" color={Colors.primary} size={30} />
              </Link>
            </View>
          ),
        }}
      />
    </Stack>
  );
};
export default Layout;
