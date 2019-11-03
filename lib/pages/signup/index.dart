import 'package:flutter/material.dart';
// local packages
import '../../utils/responsive_widget.dart';
import '../../widgets/appbar.dart';
import '../../widgets/footer.dart';
import '../../styles/textstyles.dart';

class SignUpIndex extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    //get screen dimensions
    double _screenHeight = MediaQuery.of(context).size.height;
    double _screenWidth = MediaQuery.of(context).size.width;

    return ResponsiveWidget(
      largeScreen: Scaffold(
          body: SingleChildScrollView(
              child: Column(children: <Widget>[
        GMCAppBar(),
        Container(
            width: _screenWidth,
            padding: EdgeInsets.symmetric(horizontal: 48, vertical: 21),
            color: Colors.white,
            child: Column(children: <Widget>[
              Text('Who are we looking for?', style: GMCTextStyles.h1),
              Container(height: 50, color: Colors.white)
            ])),
        Footer()
      ]))),
      mediumScreen: Scaffold(),
      smallScreen: Scaffold(),
    );
  }
}
