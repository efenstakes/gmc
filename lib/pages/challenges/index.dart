import 'package:flutter/material.dart';
// local packages
import '../../utils/responsive_widget.dart';
import '../../widgets/appbar.dart';
import '../../styles/textstyles.dart';
import '../../widgets/footer.dart';
import '../../styles/colors.dart';

class ChallengesIndex extends StatelessWidget {
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

        //TODO: replace with text
        Container(
            color: Colors.white,
            padding: EdgeInsets.symmetric(horizontal: 48, vertical: 21),
            //    width: _screenWidth,
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  Container(
                      width: _screenWidth / 3,
                      height: 200,
                      child: Card(color: Colors.blue)),
                  Expanded(
                      child: Container(
                          height: 400,
                          decoration: BoxDecoration(
                              image: DecorationImage(
                                  fit: BoxFit.contain,
                                  image: AssetImage(
                                      'assets/isometrics/challenges.png')))))
                ])),

        Container(color: Colors.white, height: 50),
        Container(
            color: GMCColors.greyBackground,
            padding: EdgeInsets.symmetric(horizontal: 72, vertical: 50),
            width: _screenWidth,
            child: Column(children: <Widget>[
              Row(children: <Widget>[
                Text('annual challenges'.toUpperCase(), style: GMCTextStyles.h2)
              ]),
              SizedBox(height: 40),
              Container(
                  padding: EdgeInsets.symmetric(horizontal: 92),
                  child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: <Widget>[
                        Column(children: <Widget>[
                          ClipOval(
                              child: Container(
                                  height: 180, width: 180, color: Colors.red)),
                          SizedBox(height: 15),
                          Text('Induction', style: GMCTextStyles.bodyBlue)
                        ]),
                        Column(children: <Widget>[
                          ClipOval(
                              child: Container(
                                  height: 180, width: 180, color: Colors.blue)),
                          SizedBox(height: 15),
                          Text('3-day challenge', style: GMCTextStyles.bodyBlue)
                        ]),
                        Column(children: <Widget>[
                          ClipOval(
                              child: Container(
                                  height: 180,
                                  width: 180,
                                  color: Colors.green)),
                          SizedBox(height: 15),
                          Text('Commencement', style: GMCTextStyles.bodyBlue)
                        ])
                      ])),
              SizedBox(height: 80),
              Row(children: <Widget>[
                Text('in-house'.toUpperCase(), style: GMCTextStyles.h2)
              ]),
              SizedBox(height: 40),
              Container(
                  padding: EdgeInsets.symmetric(horizontal: 92),
                  child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: <Widget>[
                        Column(children: <Widget>[
                          ClipOval(
                              child: Container(
                                  height: 180, width: 180, color: Colors.red)),
                          SizedBox(height: 15),
                          Text('Induction', style: GMCTextStyles.bodyBlue)
                        ])
                      ]))
            ])),
        Footer()
      ]))),
      mediumScreen: Scaffold(),
      smallScreen: Scaffold(),
    );
  }
}
