package is.hi.hbv501g.hbv1.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping("/")
    public String HomeController (){

        return "home";
    }
}
