import 'package:flutter/material.dart';
//local packages
import '../utils/responsive_widget.dart';

class Landing extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ResponsiveWidget(
      largeScreen: Scaffold(),
      mediumScreen: Scaffold(),
      smallScreen: Scaffold(),
    );
  }
}
