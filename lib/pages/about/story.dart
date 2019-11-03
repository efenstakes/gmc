import 'package:flutter/material.dart';
//local packages
import '../../widgets/appbar.dart';
import '../../widgets/footer.dart';

class Story extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Scaffold(
            body: SingleChildScrollView(
                child: Column(children: <Widget>[
      GMCAppBar(),
      Center(child: Text('Story works')),
      Footer()
    ]))));
  }
}
