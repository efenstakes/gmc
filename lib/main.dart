import 'package:flutter/material.dart';
//local packages
import 'pages/index.dart';

void main() => runApp(GMC());

class GMC extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Landing(),
    );
  }
}
