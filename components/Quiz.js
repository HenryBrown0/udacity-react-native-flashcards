import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
//Redux
import { connect } from 'react-redux';
import { fetchDecks } from '../actions';
//Media
import img from './media/img/100x100.png';

class Quiz extends Component {
  static navigationOptions = {
    title: 'Quiz',
  };
  state = {
    questionNo: 1,
    max: this.props.decks
      .filter(d => d.id == this.props.navigation.state.params.id)
      .pop().questions.length,
    showAnswer: false,
    correct: 0,
    finish: false,
  }

  nextQuestion(status) {
    if(status){
      this.setState((prevState) => ({
        correct: prevState.correct + 1
      }))
    }
    if(this.state.max === this.state.questionNo){
      this.setState({ finish: true })
    } else {
      this.setState((prevState) => ({
        showAnswer: false,
        questionNo: prevState.questionNo + 1
      }))
    }
  }

  restart() {
    this.setState({
      questionNo: 1,
      showAnswer: false,
      correct: 0,
      finish: false,
    })
  }

  toggleAnswer(){
    this.setState((prevState) => ({
      showAnswer: !prevState.showAnswer
    }))
  }
  
  render() {
    const { id } = this.props.navigation.state.params;
    const { decks, navigation } = this.props;
    const { finish, questionNo, showAnswer, max, correct } = this.state;
    const questions = decks.filter(d => d.id == id).pop().questions;

    const quiz = (
      <View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>
            { questionNo + " of " + max }
          </Text>
          <Text style={styles.detailTitle}>
            { questions[questionNo - 1].question }
          </Text>
          <Text style={styles.detailTitle}>
            { showAnswer ? questions[questionNo - 1].answer : ' ' }
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              title={ showAnswer ? 'Hide answer ' : 'Show answer' }          
              onPress={() => this.toggleAnswer()}
            />
          </View>
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              title='Incorrect'
              color='firebrick'
              disabled={!showAnswer}   
              onPress={() => this.nextQuestion(false)}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title='Correct'
              color='darkgreen'
              disabled={!showAnswer}
              onPress={() => this.nextQuestion(true)}
            />
          </View>
        </View>
      </View>
    );

    end = (
      <View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>{ correct + "/" + max }</Text>
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              title='Restart Quiz'
              color='firebrick'
              onPress={() => this.restart()}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title='Go back to deck'
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </View>
    );

    return (
      <View style={styles.container}>
        { finish ? end : quiz }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 7,
    justifyContent: 'flex-start',
  },
  detailContainer: {
    alignItems: 'center',
  },
  detailTitle: {
    margin: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  btn: {
    flex: 1,
    margin: 5,
  }
});

function mapStateToProps ({ decks }) {
  return { decks }
}

export default connect(mapStateToProps)(Quiz)
