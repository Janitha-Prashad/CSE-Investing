import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import './Open.scss';
import { Container, UncontrolledCollapse, Col, Row, Button, Card, CardTitle, CardBody, CardFooter, CardHeader } from 'reactstrap';
import Unde from '../../../components/UnderDevelop/Underdevolop';
class App extends Component {  

    render() {
        return (
            <div className={"main"}>

                <section>
                    <Container>
                        <Row >
                            
                            <p className={"title"} >අපි බලමු අලුතින් ගිනුමක්  ආරම්භ කරගන්නා ආකාරය. </p>


<ol class="accordion" id="accordionExample">
    <li className={"sub-title"}>ඔබ දැනගත යුතු කරුනු <sapn className={"pointer"}  data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">👈</sapn></li>
    <div id="collapse1" class="collapse show" aria-labelledby="heading1" data-parent="#accordionExample">
        <ul className={"list"}>
            <li > ඔබට නීත්‍යානුකූලව සෑදිය හැක්කේ එක් CDS ගිනුමක් පමනි.</li>
            <li  >ඔබට තැරව්කාර ආයතන කීපයක තැරව්කාර ගිනුම් සාදාගත හැකිය. </li>
            <li  >නමුත් එක ආයතනනයකින් එක් ගිනුමක් බැගින් පමනි</li>
        </ul>
    </div>




    <li className={"sub-title "}  >පැරණි ආකාරයට <span className={"pointer"} data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">👈</span></li>
    <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#accordionExample">

        <ul className={"list"}>
            <li  >මේ සදහා ඔබට තැරව්කාර ආයතනයක් වෙත යාමට සිදුවන අතර, ඔවුන් ලබාදෙන ඉල්ලුම්පත් නිවැරදිව පුරවා ඔවුන් වෙත ලබා දිය යුතුයි.</li>
            <li >ඔබ ඉල්ලුම්පත් සමග ඔබගේ ජාතික හැදුනුම්පතේ හෝ විදේශ ගමන් පත්‍රයේ පිටපතක් , බැංකු පොතේ පිටපතක් සහ පදිංචිය සනාතකල හැකි යම් බිල්පතක් වැනි යමක් ඉතිරිපත් කල යුතුය.</li>
            <li  >බොහේ තැරව්කාර ආයතන අන්තර්ජාලය හරහා ගනුදෙනු කලහැකි මෘදුකාංග ලබා දෙන අතර , එය ඉල්ලුම් කිරීම සදහා ආයෝජකයා පවත්වාගෙන යායුතු අවම කොටස් හිමිකම් ප්‍රමාණය එක් එක් ආයතනයට ආවේනික වේ. </li>

        </ul>
    </div>

    <li className={"sub-title "} >නව ආකාරයට <span className={"pointer"} data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">👈</span></li>
    <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#accordionExample">
        <ul className={"list"}>
            <li>මේ සදහා ඔබට email ලිපිනයක්, දුරකතන අංකයක් තිබිය යුතුය</li>
            <li>පළමුව ඔබ <a href="https://www.cds.lk/">www.cds.lk</a> වෙත ගොස් නව යෙදුම බාගත කල යුතුය.</li>
            <li>ඉන් පසු ඔබේ විස්තර නිවැරදිව ලබා දී නව MY CSE ගිනුමක් සාදාගන්න.</li>
            <li>ඔබේ NIC/Passport සහ බැංකු පොත ලග තබාගත යතුය.</li>
            <li>ඔබේ සියලු විස්තර නිවැරදිව පුරවා යොමුකල පසු cse මගින් ඔබේ ඉල්ලුම් පත්‍රය ලැබිනු බවට තහවුරු කර email පනිවිඩයක් එවනු ලැබේ</li>
            <li>නිවැරදිව online cds ගිනුමක් සාදන ආකාරය අවශ්‍ය අයට  <Link to= "/opencds">👉👉</Link> video </li>


        </ul>
    </div>
    <li className={"sub-title "} >අවසාන ක්‍රියාවලිය <span className={"pointer"} data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4" >👈</span></li>
    <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
        <ul className={"list"}>
            <li>ගිනුම ආරම්භ වීමට වෙළද දින 3ක් පමන ගතවේ.</li>
            <li>ඔබ තෝරාගන්නා තැරව්කාර ආයතනයෙන් , ඔබට උපදේශක මහතෙකු අනුයුක්ත කරනු ලැබේ</li>
            <li>ඔහු විසින් ඔබගේ ගිනුම ආරම්භ වූ බව හෝ යම් වෙනස්වීමක් අවශ්‍ය නම් ඒ බව ඔබට දැනුම් දෙනු ලැබේ.</li>
        </ul></div>

        <li className={"sub-title "} >අපි පලමු ආයෝජනය තේරෙන විදියට කරමු <span className={"pointer"} data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">👈</span></li>
    <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
    <ul className={"list"}>
<li>ඔන්න ඔබේ නම් J කියල ගන්නම්. දැන් J අලුතින්ම cds ගිනුමක් සාගාගෙන තියෙන්නේ. J තෝරගත්තේ X කියන තැරව්කාර ආයතනය. ඉතින් ඒ X ආයතනයෙන් J ට ලබා දෙනවා Y කියන ආයෝජක උපදේශක මහතාව. දැන් J පලමු ආයෝජනය කරන්න ලෑස්ති වෙන්නේ. J ට කෙලින්ම තමන්ගේ CDS ගිනුමට ස්ල්ලි දාන්න බෑ. ඔහු X කියන ආයතනයෙන් ලබාදුන් ගිනුමට මුලින් මුදල් දමා ඒ බව Y ට දැනුම් දෙන්න ඕන. J මුද්ල් බැරකල රිසිප්ට් පත මුදල CDS ගිනුමට බැරවෙන තෙක් තතා ගැනීම කෝකටත් හොදයි. දැන් J ගේ cds  ගිනුමෙ තියෙන සල්ලි වලින් J තෝරාගත් සමාගමේ කොටස් Y මාර්ගයෙන් හෝ online trading ඔස්සේ මිලදීගන්නවා</li>

</ul>
        
    </div>
</ol>
                           
                        </Row>

                        
                    </Container>
                </section>
                
            </div>
        );
    }
}

export default App;