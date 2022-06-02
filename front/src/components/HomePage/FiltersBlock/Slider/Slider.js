
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./sliderStyles.css";
// import {  Range } from 'rc-slider';
import classes from "./Slider.module.css";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
//const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);


const SliderFilter = (props) => {
    return(
        <div className={classes.content}>
            <Range
                marks={{
                    0: `0`,
                    120: `120`
                }}
                min={0}
                max={120}
                defaultValue={[0, 120]}
                tipFormatter={value => `${value}`}
                tipProps={{
                    placement: "bottom",
                    visible: true
                }}
            />
        </div>
    );
}
export default SliderFilter;