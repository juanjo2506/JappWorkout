import React, { useState } from 'react'
import "./Home.css"
import MuscleUp from "../assets/img/MuscleUp.png"
import PullUp from "../assets/img/PullUp.png"
import Dips from "../assets/img/Dips.png"
import Squats from "../assets/img/Squats.png"
import CounTimer from './CounTimer'

function Home() {
    const [value, setValue] = useState("")
    const options = [
        {label: "Muscle Ups", value: MuscleUp, TextBody: "Before attempting muscle-ups, it's essential to have sufficient upper body strength, particularly in the shoulders, chest, and back. Muscle-ups combine elements of pull-ups and dips, so it's crucial to master these exercises individually first. Muscle-ups require explosiveness to transition from the pull-up phase to the dip phase. Practice explosive pull-ups and work on the transition between the pull-up and dip positions, but before attempting explosive pull-ups and practicing the transition between the pull-up and dip positions, ensure that you can perform at least 15 pull-ups with proper form. Once you've achieved this, incorporate explosive pull-ups into your routine, aiming for 4 to 6 repetitions per set and completing 5 sets. If you're unable to perform a full muscle-up yet, use resistance bands or assistance from a spotter to help you through the movement. Start with low reps and gradually increase as you build strength and confidence. Aim for 3-5 sets of 3-5 repetitions of muscle ups to start.", TextStreet:"Once you have mastered it and can perform at least 10 clean muscle-ups, you can begin incorporating weighted muscle-ups into your routine. Start by adding 5 to 10 kilograms, depending on how comfortable you feel with that specific weight. Then, aim for around 4 to 6 repetitions and complete 5 sets. As you progress and the exercise becomes easier, you can gradually increase the weight."},
        {label: "Pull Ups", value: PullUp, TextBody: "If you're just starting to do bodyweight pull-ups, the repetition ranges for beginners can vary depending on individual fitness level and capability. Normally you should test first how many pull ups you are capable to do, for example let's say you can do 20 pull ups, so let's work with 60% of this number, which would be 12 pull-ups, this is the number of repetitions you should do in each set, normally try to do about 4 to 6 sets.", TextStreet:"To start incorporating weighted pull-ups into your routine, you'll need to know your one-rep max (1RM). This is the maximum amount of weight you can lift for one repetition with good form. You can determine your one-rep max (1RM) by testing with progressively heavier weights until you find the maximum weight you can lift for one repetition. Once you know your one-rep max (1RM), you can calculate the appropriate weight to use for your working sets. A common approach is to use a percentage of your one-rep max (1RM). For beginners, starting with around 70-80% of your 1RM is a good guideline.Based on the weight you're using, you can then determine the number of repetitions you should aim for in each set. A common repetition range for strength training is 5-8 repetitions per set. Adjust the weight as needed to stay within this range while maintaining proper form. Normally you should be doing around 4 to 5 sets, since, strength training tends to be more exhausting for the nervous system."},
        {label: "Dips", value: Dips, TextBody: "Before adding weight, ensure you can perform bodyweight dips with proper form. Focus on maintaining a straight body position and controlled movement. If you find yourself struggling with dips, it's a good idea to start with push-ups instead. Begin with 5 to 10 repetitions, depending on your current strength level. If you're unable to perform push-ups initially, you can try holding the push-up position for as long as possible until you feel fatigue in your arms. This will gradually build the strength needed to perform full push-ups. Another option is to do assisted push-ups, where you support yourself on your knees instead of your toes. Aim to do 4 to 6 sets, working close to failure each time.", TextStreet:"Test your one-rep max (1RM) for weighted dips by gradually adding weight until you reach the maximum weight you can lift for one repetition with good form. Use a percentage of your one-rep max (1RM) to determine your working weight for weighted dips. Beginners can start with around 70-80% of their one-rep max (1RM). Aim for 5-8 repetitions per set for strength training. Adjust the weight to stay within this range while maintaining proper form. Gradually increase weight or repetitions as you become stronger. Aim for incremental increases to continue challenging your muscles."},
        {label: "Squats", value: Squats, TextStreet: "Even if you have never done squats before, you should still be able to start adding weight to your routine. Since leg muscles are used in daily activities, we already have a certain level of strength to lift weights. Therefore, there isn't a need for a bodyweight-only guide in this case. Following the same approach as with dips and pull-ups, we should first test our one-rep max (1RM), then work with around 70-80% of that weight. Remember to choose a weight where you can perform at least 6-12 reps, as this is the most efficient range for this exercise. Initially, squats are often the easiest to improve for beginners, so you can typically increase the weight in your next session. Always prioritize quality over quantity."}
    ]
    function handleSelect(event) {
        setValue(event.target.value)
    }
  return (
    <>
    <main className='main-home'>


      
        <section className='home-section'>
          <h2>What are you working out today?</h2>
          <select name="" id="" onChange={handleSelect} className='select'>
            <option value="" disabled selected>Choose exercise</option>
            {options.map(option=>(
                <option value={option.value}>{option.label}</option>
            ))}
          </select>

          {value && <img src={value} alt="" className='exercise-img'/>}
          {value && value !== Squats && <div className='bodyweight-container'><h2 className='title'>BodyWeight</h2> <p className='main-p'>{options.find(option=> option.value === value).TextBody}</p></div>}
          {value && <div className='weighted-container'><h2 className='title'>Weighted</h2> <p className='main-p'>{options.find(option=> option.value === value).TextStreet}</p></div>}
        </section>
        <CounTimer/>


    </main>
    </>
  )
}

export default Home