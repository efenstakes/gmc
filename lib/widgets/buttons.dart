import 'package:flutter/material.dart';
//import local packages
import '../styles/colors.dart';
import '../styles/textstyles.dart';

class GMCButtons {
  //view all partners button on homepage
  static Widget viewAllPartners(Function onPressed) => OutlineButton(
      color: GMCColors.blue,
      disabledBorderColor: GMCColors.blue,
      highlightElevation: 16,
      child: Text('view all'.toUpperCase(), style: GMCTextStyles.navLinks),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
      onPressed: onPressed);
}
