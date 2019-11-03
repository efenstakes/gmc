import 'package:flutter/material.dart';
// local packages
import '../../utils/responsive_widget.dart';
import '../../widgets/appbar.dart';
import '../../widgets/footer.dart';

//different sections
import 'story.dart';
import 'whyus.dart';
import 'team.dart';
import 'inspiration.dart';
import 'coaches.dart';
import 'mission.dart';

class About extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    //get screen dimensions
    double _screenHeight = MediaQuery.of(context).size.height;
    double _screenWidth = MediaQuery.of(context).size.width;

    return ResponsiveWidget(
      largeScreen: Scaffold(
          body: PageView(scrollDirection: Axis.horizontal, children: <Widget>[
        Story(),
        WhyUs(),
        Team(),
        Inspiration(),
        Coaches(),
        Mission(),
      ])),
      mediumScreen: Scaffold(),
      smallScreen: Scaffold(),
    );
  }
}
