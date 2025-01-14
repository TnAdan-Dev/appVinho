import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "#010101",
        borderBottomWidth: 0, // Remove a borda
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "center", // Centraliza o título na barra de navegação
    }}
  >
      <Stack.Screen name="index" options={{title: "WineWiz"}}/>
    </Stack>
  );
}
