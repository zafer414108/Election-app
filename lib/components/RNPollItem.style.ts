import {
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
  Animated,
} from "react-native";

export const _container = (
  borderColor: string,
  borderWidth: number,
): ViewStyle => ({
  flex: 1,
  borderWidth,
  borderColor,
  backgroundColor: "transparent",
  marginTop: 10,
  borderRadius: 12,
  overflow: "hidden",
  paddingVertical: 16,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const _animatedViewStyle = (
  backgroundColor: string,
  animatedWidth: Animated.AnimatedInterpolation<number>,
): ViewStyle => ({
  backgroundColor,
  width: animatedWidth,
});

interface Style {
  container: ViewStyle;
  choiceTextStyle: TextStyle;
  pollItemContainer: ViewStyle;
  percentageTextStyle: TextStyle;
  checkMarkImageStyle: ImageStyle;
}

export default StyleSheet.create<Style>({
  container: {},
  choiceTextStyle: {
    flexShrink: 1,
    flexWrap: "wrap",
    color: "#19191a",
    paddingHorizontal: 16,
  },
  pollItemContainer: {
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  percentageTextStyle: {
    fontSize: 12,
    lineHeight: 24,
    color: "#19191a",
    fontWeight: "700",
  },
  checkMarkImageStyle: {
    width: 18,
    height: 18,
    marginRight: 12,
    tintColor: "#19191a",
  },
});
