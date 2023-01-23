import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';



import  {  useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const QuesAnsPair = (props) => {
    const [selected, setSelected] = useState({});
    const [score, setScore] = useState({});
   
    useEffect(() => {
            var arr = Object.values(score)
            let temp = 0;
            for (let i = 0; i < arr.length; i++) {
                temp = temp + arr[i]
            }
            final_score = temp
            props.getScore(final_score);
            props.get_selected(selected)
    }, [score, props.index])

    var final_score;
    const handleNext = async (selectedAns, achieved_score) => {
        setSelected({ ...selected, [props.index]: selectedAns });
        setScore({ ...score, [props.index]: achieved_score });
        props.is_next();
    }

    return (
        <>
            <View style={styles.questionContainer}>
                <Text style={styles.questionIndex}>Question {props.index + 1}</Text>
                <Text style={styles.questionText}>
                    {props.question}
                </Text>
            </View>
            <View style={styles.selectedAnswerContainer}>
                <Text style={styles.selectedAnswer}>Selected Answer: {selected[props.index] === undefined ? <Text>_________</Text> : selected[props.index]} </Text>
            </View>
            <View style={styles.answersContainer}>
                {
                    props.answers.map((ans, i) => {
                        return (

                            <TouchableOpacity key={i} style={styles.answer} onPress={handleNext.bind(this, ans['label'], ans['value'])}>
                                <View>
                                    <Text style={styles.answerText}>{ans['label']}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </>
    );
}


const Quiz = (props) => {
  const questions={
    "questions": [
        {
            "questionText": "what the country that start with A?",
            "answers": [
                {
                    "label": "Australia",
                    "value": 1
                },
                {
                    "label": "Britain",
                    "value": 0
                },
                {
                    "label": "France",
                    "value": 0
                },
                {
                    "label": "Germany",
                    "value": 0
                }
            ]
        },
        {
          "questionText": "what the country that start with F?",
          "answers": [
              {
                  "label": "Australia",
                  "value": 0
              },
              {
                  "label": "Britain",
                  "value": 0
              },
              {
                  "label": "France",
                  "value": 1
              },
              {
                  "label": "Germany",
                  "value": 0
              }
          ]
        },
        {
          "questionText": "what the country that start with B?",
          "answers": [
              {
                  "label": "Australia",
                  "value": 0
              },
              {
                  "label": "Britain",
                  "value": 1
              },
              {
                  "label": "France",
                  "value": 0
              },
              {
                  "label": "Germany",
                  "value": 0
              }
          ]
        },
        {
          "questionText": "what the country that start with G?",
          "answers": [
              {
                  "label": "Australia",
                  "value": 0
              },
              {
                  "label": "Britain",
                  "value": 0
              },
              {
                  "label": "France",
                  "value": 0
              },
              {
                  "label": "Germany",
                  "value": 1
              }
          ]
        }
    ]
}
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showNext, setShowNext] = useState(false);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState({})

    const handleQuizTraversal = () => {
        if (questionIndex === questions['questions'].length - 1) {
           
           console.log( score);
            return
        }
        setQuestionIndex((questionIndex) => questionIndex + 1);
        setShowNext(false);
    }

    const is_next = () => {
        setShowNext(true);
    }

    const get_Score = (score) => {
        setScore(score);
    }

    const getSelected = (selected) => {
        setSelected(selected);
    }

    return (
        <View style={styles.screen}>
            <QuesAnsPair
                question={questions['questions'][questionIndex]['questionText']}
                index={questionIndex}
                answers={questions['questions'][questionIndex]['answers']}
                is_next={is_next}
                getScore={get_Score}
                length={questions['questions'].length}    
                get_selected={getSelected}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.backButton}>
                        {
                            showNext && questionIndex > 0 || (selected[questionIndex]!==undefined && questionIndex > 0) ? <Button title="Back " onPress={() => setQuestionIndex((index) => index - 1)} /> : null
                        }
                    </View>
                {
                    showNext || selected[questionIndex]!==undefined ? <View>
                        <Button title={questionIndex === questions['questions'].length - 1 ? 'end ' : 'next'} onPress={handleQuizTraversal} />
                    </View> : null
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    backButton: {
        marginRight: 10,
    }, questionContainer: {
      margin: 20,
      backgroundColor: "white",
      padding: 15,
      borderRadius: 7,
      borderColor: "blue",
      borderWidth: 2,
      minHeight: '25%'
  },
  questionIndex: {
      textAlign: 'center',
      fontSize: 22,
      marginBottom: 15,
      fontWeight: 'bold',
      color: "red"
  },
  questionText: {
      fontSize: 20,
      textAlign: 'center',

  },
  answersContainer: {
      marginVertical: 20,
      alignItems: 'center',
  },
  answer: {
      backgroundColor:"green",
      padding: 10,
      width: '45%',
      marginVertical: 10,
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "white"
  },
  answerText: {
      fontSize: 17,
  },
  selectedAnswer: {
      fontSize: 20,
      color: "red",
  },
  selectedAnswerContainer: {
      marginVertical: 8,
      alignItems: 'center',
  }
});

export default Quiz;