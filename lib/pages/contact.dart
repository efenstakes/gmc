import 'package:flutter/material.dart';
// local packages
import '../utils/responsive_widget.dart';
import '../widgets/appbar.dart';
import '../styles/textstyles.dart';
import '../widgets/footer.dart';

class Contact extends StatelessWidget {
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
            padding: EdgeInsets.symmetric(horizontal: 48, vertical: 21),
            color: Colors.white,
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Container(
                      width: _screenWidth / 2.5,
                      // height: 200,
                      child: Column(children: <Widget>[
                        Row(children: <Widget>[
                          Text('send us a message'.toUpperCase(),
                              style: GMCTextStyles.h2)
                        ]),
                        Container(height: 30, color: Colors.white),

                        //TODO: style the text fields
                        TextFormField(
                            decoration: InputDecoration(
                                labelText: 'Your name',
                                labelStyle: GMCTextStyles.bodyBlue)),
                        Container(height: 15, color: Colors.white),
                        TextFormField(
                            decoration: InputDecoration(
                                labelText: 'E-mail address',
                                labelStyle: GMCTextStyles.bodyBlue)),
                        Container(height: 15, color: Colors.white),
                        Row(children: <Widget>[
                          Padding(
                              padding:
                                  const EdgeInsets.symmetric(vertical: 8.0),
                              child: Text('Your message',
                                  style: GMCTextStyles.bodyBlue))
                        ]),
                        Container(height: 15, color: Colors.white),
                        TextFormField(
                            maxLines: 10,
                            decoration: InputDecoration(
                                border: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(20))))
                      ])),
                  Expanded(
                      child: Container(
                          height: 400,
                          decoration: BoxDecoration(
                              image: DecorationImage(
                                  fit: BoxFit.contain,
                                  image: AssetImage(
                                      'assets/isometrics/contact.png'))))),
                  Container(height: 50, color: Colors.white)
                ])),
        Footer()
      ]))),
      mediumScreen: Scaffold(),
      smallScreen: Scaffold(),
    );
  }
}
