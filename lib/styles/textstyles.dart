import 'package:flutter/material.dart';
//import local packages
import 'colors.dart';

class GMCTextStyles {
  //textstyle for navigation links
  static TextStyle navLinks = TextStyle(
      fontSize: 14,
      fontFamily: 'Manjari',
      fontWeight: FontWeight.w600,
      letterSpacing: 1.5,
      wordSpacing: 1.5,
      color: GMCColors.blue);

  //text style for body text
  static TextStyle body = TextStyle(
      fontSize: 11,
      fontFamily: 'Open Sans',
      letterSpacing: 1.5,
      wordSpacing: 1.5,
      color: GMCColors.greyFont);

  //text style for body text blue
  static TextStyle bodyBlue = TextStyle(
      fontSize: 16,
      fontFamily: 'Open Sans',
      letterSpacing: 1.5,
      wordSpacing: 1.5,
      color: GMCColors.blue);

  //text style for body text white
  static TextStyle bodyWhite = TextStyle(
      fontSize: 21,
      fontFamily: 'Open Sans',
      fontWeight: FontWeight.w500,
      letterSpacing: 1.5,
      wordSpacing: 1.5,
      color: Colors.white);

  //text style for h1
  static TextStyle h1 = TextStyle(
      fontSize: 24,
      fontFamily: 'Manjari',
      fontWeight: FontWeight.bold,
      letterSpacing: 1.5,
      wordSpacing: 1.5,
      color: GMCColors.blue);

  //text style for h1 white
  static TextStyle h1White = TextStyle(
      fontSize: 32,
      fontFamily: 'Manjari',
      fontWeight: FontWeight.bold,
      letterSpacing: 1.5,
      wordSpacing: 1.5,
      color: Colors.white);

  //textstyle for h2
  static TextStyle h2 = TextStyle(
      fontSize: 24,
      fontFamily: 'Open Sans',
      letterSpacing: 1.5,
      wordSpacing: 1.5,
      color: GMCColors.blue);
}
