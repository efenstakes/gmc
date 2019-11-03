import 'package:flutter/material.dart';

class ResponsiveWidget extends StatelessWidget {
  final Widget largeScreen, mediumScreen, smallScreen;
  ResponsiveWidget(
      {Key key,
      @required this.largeScreen,
      @required this.mediumScreen,
      @required this.smallScreen});

  //boolean funtions to check screen sizes

  //small screen: phone
  static bool isSmallScreen(BuildContext context) =>
      MediaQuery.of(context).size.width < 800;

  //large screen: laptop/desktop
  static bool isLargeScreen(BuildContext context) =>
      MediaQuery.of(context).size.width > 800;

  //medium screen: tablet
  static bool isMediumScreen(BuildContext context) =>
      MediaQuery.of(context).size.width > 800 &&
      MediaQuery.of(context).size.width < 1200;

  //return different layout depending on screen size
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      if (constraints.maxWidth > 800) {
        return largeScreen;
      } else if (constraints.maxWidth < 1200 && constraints.maxWidth > 800) {
        return mediumScreen ?? largeScreen;
      } else {
        return smallScreen ?? largeScreen;
      }
    });
  }
}