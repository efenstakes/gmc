import 'package:flutter/material.dart';
//import local packages
import '../styles/colors.dart';
import '../styles/textstyles.dart';
import '../utils/page_transitions.dart';

import '../pages/index.dart';
import '../pages/challenges/index.dart';
import '../pages/contact.dart';
import '../pages/signup/index.dart';
import '../pages/about/index.dart';

class GMCAppBar extends StatefulWidget {
  @override
  _GMCAppBarState createState() => _GMCAppBarState();
}

class _GMCAppBarState extends State<GMCAppBar> {
  // Navigation button widget
  Padding _navBtn(String page, Function onPressed) => Padding(
      padding: const EdgeInsets.symmetric(horizontal: 8.0),
      child: FlatButton(
          child: Text(page.toUpperCase(), style: GMCTextStyles.navLinks),
          onPressed: onPressed));

  // Navigation methods
  _navToPages(page) => Navigator.of(context).push(ScaleRoute(page: page));

  @override
  Widget build(BuildContext context) {
    return Container(
        color: Colors.white,
        padding: EdgeInsets.symmetric(horizontal: 48, vertical: 8),
        width: double.infinity,
        child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              Container(
                  child: Row(children: <Widget>[
                GestureDetector(
                    onTap: () => _navToPages(Landing()),
                    child: CircleAvatar(
                        backgroundColor: Colors.transparent,
                        child: Image.asset('assets/logos/gmc.png'),
                        maxRadius: 48)),
                SizedBox(width: 100),
                _navBtn('home', () => _navToPages(Landing())),
                SizedBox(width: 20),
                _navBtn('challenges', () => _navToPages(ChallengesIndex())),
                SizedBox(width: 20),
                _navBtn('about us', () => _navToPages(About())),
                SizedBox(width: 20),
                _navBtn('talk to us', () => _navToPages(Contact()))
              ])),
              OutlineButton(
                color: GMCColors.blue,
                disabledBorderColor: GMCColors.blue,
                highlightElevation: 16,
                child: Text('sign up'.toUpperCase(),
                    style: GMCTextStyles.navLinks),
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10)),
                onPressed: () => _navToPages(SignUpIndex()),
              )
            ]));
  }
}
