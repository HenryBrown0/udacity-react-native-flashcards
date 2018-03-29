import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
//Redux
import { connect } from 'react-redux';
import { addDeckQuestion } from '../actions';
//Media
import img from './media/img/100x100.png';

class NewQuestion extends Component {
  static navigationOptions = {
    title: 'New Question',
  };
  state = {
    questionId: '',
    question: '',
    answer: '',
  }
  
  onSubmit = () => {
    const { addDeckQuestion, navigation } = this.props;
    const { questionId, question, answer } = this.state;
    if(questionId && question && answer){
      const { id } = this.props.navigation.state.params;
      addDeckQuestion(id, questionId, question, answer);
      navigation.goBack();
    }
  }
  
  render() {
    const { id } = this.props.navigation.state.params;
    const { navigation, decks } = this.props;
    const { questionId, question, answer } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.detailInput}
            placeholder="QuestionID"
            value={questionId}
            onChangeText={(questionId) => this.setState({questionId})}
          />
          <TextInput
            style={styles.detailInput}
            placeholder="Question"
            value={question}
            onChangeText={(question) => this.setState({question})}
          />
          <TextInput
            style={styles.detailInput}
            placeholder="Answer"
            value={answer}
            onChangeText={(answer) => this.setState({answer})}
          />
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              title='Cancel'
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title='Submit'
              color="#841584"
              onPress={() => this.onSubmit()}
            />
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 7,
  },
  detailInput: {
    height: 40,
    margin: 10,
  },
  detailContent: {
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

function mapDispatchToProps (dispatch) {
  return {
		addDeckQuestion: (data) => dispatch(addDeckQuestion(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewQuestion)
