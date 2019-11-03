import 'package:flutter/material.dart';
//import local packages
import '../styles/colors.dart';

class Footer extends StatefulWidget {
  @override
  _FooterState createState() => _FooterState();
}

class _FooterState extends State<Footer> {
  //TODO: add social media icons to footer
  @override
  Widget build(BuildContext context) {
    return Align(
        alignment: Alignment.bottomCenter,
        child: Container(
            width: double.infinity, height: 70, color: GMCColors.footerColor));
  }
}
