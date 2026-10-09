class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        # define result array
        # sort nums in place


        # for loop for first num
            #check for duplicated first num and skip

            #create left and right pointers
            #while loop where left < right
                #calculate sum of current three numbers
                #check if three sum is 0
                    #append array of current three nums to result
                    #move left and right pointers to next positions
                    #check if current and next positions are the same and skip duplicates
                #if three sum is more than 0 move right to next position
                #else move left to next position
        #return result