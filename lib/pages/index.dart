import 'package:flutter/material.dart';
//local packages
import '../utils/responsive_widget.dart';
import '../widgets/appbar.dart';
import '../styles/textstyles.dart';
import '../styles/colors.dart';
import '../widgets/buttons.dart';
import '../widgets/footer.dart';

class Landing extends StatelessWidget {
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
                                      'assets/isometrics/gmc_home_main.png')))))
                ])),

        Container(color: Colors.white, height: 50),
        Container(
            width: _screenWidth,
            color: GMCColors.blue,
            child: Padding(
                padding: EdgeInsets.symmetric(vertical: 48),
                child: Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: <Widget>[
                      Column(children: <Widget>[
                        Text('45', style: GMCTextStyles.h1White),
                        Text('Participants to date',
                            style: GMCTextStyles.bodyWhite)
                      ]),
                      Column(children: <Widget>[
                        Text('15', style: GMCTextStyles.h1White),
                        Text('Participating companies',
                            style: GMCTextStyles.bodyWhite)
                      ]),
                      Column(children: <Widget>[
                        Text('10', style: GMCTextStyles.h1White),
                        Text('Socail impact wildcards',
                            style: GMCTextStyles.bodyWhite)
                      ])
                    ]))),

        Container(
            color: GMCColors.greyBackground,
            padding: EdgeInsets.symmetric(horizontal: 72, vertical: 50),
            width: _screenWidth,
            child: Column(children: <Widget>[
              Container(
                  child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                    CircleAvatar(
                        maxRadius: 100,
                        backgroundColor: Colors.transparent,
                        child: Image.asset(
                            'assets/isometrics/personal_development.png')),
                    SizedBox(width: 200),
                    Container(
                        child: Expanded(
                            child: Text(
                                'Personal development, systems thinking and coaching.',
                                style: GMCTextStyles.h2)))
                  ])),
              SizedBox(height: 20),
              Container(
                  width: _screenWidth,
                  child: Column(children: <Widget>[
                    Container(
                        child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                          CircleAvatar(
                              maxRadius: 100,
                              backgroundColor: Colors.transparent,
                              child: Image.asset(
                                  'assets/isometrics/creativity.png')),
                          SizedBox(width: 200),
                          Container(
                              child: Expanded(
                                  child: Text(
                                      'Experience creativity techniques and how to continuously innovate',
                                      style: GMCTextStyles.h2)))
                        ]))
                  ])),
              SizedBox(height: 20),
              Container(
                  width: _screenWidth,
                  child: Column(children: <Widget>[
                    Container(
                        child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                          CircleAvatar(
                              maxRadius: 100,
                              backgroundColor: Colors.transparent,
                              child: Image.asset(
                                  'assets/isometrics/knowledge.png')),
                          SizedBox(width: 200),
                          Container(
                              child: Expanded(
                                  child: Text(
                                      'Gain knowledge from inspirational & influential  leaders.',
                                      style: GMCTextStyles.h2)))
                        ]))
                  ])),
              SizedBox(height: 20),
              Container(
                  width: _screenWidth,
                  child: Column(children: <Widget>[
                    Container(
                        child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                          CircleAvatar(
                              maxRadius: 100,
                              backgroundColor: Colors.transparent,
                              child:
                                  Image.asset('assets/isometrics/network.png')),
                          SizedBox(width: 200),
                          Container(
                              child: Expanded(
                                  child: Text(
                                      'Network, co-create and acquire unique new mind sets with new generation leaders.',
                                      style: GMCTextStyles.h2)))
                        ]))
                  ])),
              SizedBox(height: 20)
            ])),

        Container(
            color: Colors.white,
            padding: EdgeInsets.symmetric(vertical: 50),
            width: _screenWidth,
            child: Column(children: <Widget>[
              Text('Partners', style: GMCTextStyles.h2),
              SizedBox(height: 20),
              Container(
                  padding: EdgeInsets.symmetric(horizontal: 48),
                  child: Row(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: <Widget>[
                        CircleAvatar(
                            backgroundColor: Colors.transparent,
                            maxRadius: 64,
                            child: Image.asset('assets/logos/bidco.jpg')),
                        CircleAvatar(
                            backgroundColor: Colors.transparent,
                            maxRadius: 64,
                            child: Image.asset('assets/logos/clarity4d.png')),
                        CircleAvatar(
                            backgroundColor: Colors.transparent,
                            maxRadius: 64,
                            child: Image.asset('assets/logos/incentro.png')),
                        CircleAvatar(
                            backgroundColor: Colors.transparent,
                            maxRadius: 64,
                            child: Image.asset('assets/logos/klm.png')),
                        GMCButtons.viewAllPartners(() {})
                      ]))
            ])),
        Footer()
      ]))),
      mediumScreen: Scaffold(),
      smallScreen: Scaffold(),
    );
  }
}
