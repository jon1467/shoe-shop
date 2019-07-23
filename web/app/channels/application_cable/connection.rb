module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :basket_id

    def connect
      self.basket_id = find_basket
    end

    private
      def find_basket
        id = cookies.signed[:basket_id]
        if basket_id = id
          basket_id
        else
          reject_unauthorized_connection
        end
      end
  end
end
