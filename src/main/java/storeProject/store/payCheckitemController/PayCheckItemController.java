package storeProject.store.payCheckitemController;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import storeProject.store.item.ItemDAO;

import java.io.PrintWriter;

import javax.servlet.http.HttpSession;

@Controller
public class PayCheckItemController {


	@PostMapping("/PayCheck")
	public String payCheck (@RequestParam("itemID") String itemID,
							@RequestParam("itemName") String itemName,
							@RequestParam("itemAmount") String itemAmount,
							@RequestParam("itemType") String itemType,
							@RequestParam("totalAmount") String totalAmount,
							@RequestParam("buyCount") String buyCount,
							Model model,
							HttpSession session) {


		if(itemID == null || itemName == null || itemAmount == null|| itemType == null || totalAmount == null) {
			model.addAttribute("message", "아이템정보 체크 오류");
			return "itemBasket";
		}
		ItemDAO itemDAO = new ItemDAO();

		int result = itemDAO.itemCheck(itemID, itemName, itemAmount, itemType,totalAmount);
		if(result == 1) {
			model.addAttribute("payItemID", itemID);
			model.addAttribute("payItemName", itemName);
			model.addAttribute("payItemAmount", itemAmount);
			model.addAttribute("payItemType", itemType);
			model.addAttribute("payTotalAmount", totalAmount);
			model.addAttribute("buyCount", buyCount);
			return "payApi";

		} else {
			model.addAttribute("message","아이템 정보 검증 에러");
		}
		return "itemBasket";
	}

}
