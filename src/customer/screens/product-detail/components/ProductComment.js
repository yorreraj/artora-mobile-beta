import React, { useState } from 'react';
import { View, Text, Item, Textarea, Icon } from 'native-base';
import CommentItem from './CommentItem';
import useTheme from '../../../../common/theme/use-theme';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const FAKE_COMMENTS = [
    {
        author:"Yorre Rajaonarivelo",
        date:new Date(),
        comment:"Salama tompoko oh, mbola mahazo miady ve?",
        responses:[
            {
                author:"Map'Bika",
                date:new Date(),
                comment:"Eny tompoko."
            }
        ]
    }
]

function ProductComment(props) {
    const { colors } = useTheme()
    const [showResponseComment, setShowResponseComment] = useState(false)
    const [comments, setComments] = useState(FAKE_COMMENTS)
    const [comment, setComment] = useState("")
    const [indexOfExpendedComment, setIndexOfExpendedComment] = useState(-1)

    const handleAddComment = () => {
        if(indexOfExpendedComment === -1 ){
            setComments([...comments,{
                author:"Test user",
                date: new Date(),
                comment,
                responses:[
                    {
                        author:"Map'Bika",
                        date: new Date(),
                        comment: "Salam'oh!!!!"
                    }
                ]
            }])
        }else{
            const newComments = [...comments]
            newComments[indexOfExpendedComment].responses.push({
                author:"Map'Bika",
                date: new Date(),
                comment: comment
            })
        }
        
        setComment("")
    }

    return (
        <View style={{paddingTop:20}}>
            {
                comments.map((item, index) => (
                    (index === indexOfExpendedComment || indexOfExpendedComment === -1)&&
                    <View key={`comment-${index}`} style={{marginBottom:10}}>
                        <CommentItem 
                            author={item.author}
                            date={item.date} 
                            comment={item.comment}
                            onPressComment={() => setIndexOfExpendedComment(indexOfExpendedComment === -1 || indexOfExpendedComment !== index ? index : -1)}
                        />
                        {
                            (index === indexOfExpendedComment)&&
                            item.responses.map((res, index) => (
                                <View style={{paddingLeft:20}}>
                                    <CommentItem 
                                        author="Yorre Rajaonarivelo" 
                                        comment={res.comment} 
                                        childComment 
                                        date={new Date()}
                                    />
                                </View>
                            ))
                        }
                    </View>
                ))
            }
            {/* {
                (showResponseComment)&&
                <View style={{marginLeft:20}}>
                    <CommentItem author="Map'Bika" comment="Salama tompoko, mbola mahazo miady kely ianao fa tongava hijery.😉" childComment date={new Date("06/22/2020")}/>
                    <CommentItem author="Yorre Rajaonarivelo" comment="Merci beaucoup 👍" childComment date={new Date("06/23/2020")}/>
                </View>
            } */}
            <Item style={{marginTop:10, borderRadius:5, paddingVertical:10}} regular>
                <Textarea 
                    rowSpan={1} 
                    placeholder={indexOfExpendedComment === -1 ? "Votre commentaire . . .":"Répondre au commentaire . . ."} 
                    placeholderTextColor={colors.textLight} 
                    style={{fontSize:18, borderRadius:5, width:Dimensions.get('window').width - 80}}
                    value={comment}
                    onChangeText={(text) => setComment(text)}
                />
                <TouchableOpacity onPress={() => handleAddComment()}>
                    <Icon type="MaterialCommunityIcons" name="send" style={{color:colors.primary}}/>
                </TouchableOpacity>
            </Item>
        </View>
    );
}

export default ProductComment;